import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const STATS_FILE = path.join(DATA_DIR, 'stats.json');

interface ClickEvent {
  type: 'android' | 'ios' | 'android-auto';
  timestamp: number;
  userAgent: string;
  section: 'hero' | 'coming-soon';
}

interface StatsData {
  events: ClickEvent[];
  lastUpdated: number;
}

// Initialize stats file if it doesn't exist
async function ensureStatsFile() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }

  if (!existsSync(STATS_FILE)) {
    const initialData: StatsData = {
      events: [],
      lastUpdated: Date.now(),
    };
    await writeFile(STATS_FILE, JSON.stringify(initialData, null, 2));
  }
}

// Read stats from file
async function readStats(): Promise<StatsData> {
  await ensureStatsFile();
  try {
    const data = await readFile(STATS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { events: [], lastUpdated: Date.now() };
  }
}

// Write stats to file
async function writeStats(data: StatsData) {
  await ensureStatsFile();
  await writeFile(STATS_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const event: ClickEvent = await request.json();

    // Validate event
    if (!event.type || !event.timestamp || !event.section) {
      return NextResponse.json({ error: 'Invalid event data' }, { status: 400 });
    }

    // Read existing stats
    const stats = await readStats();

    // Add new event
    stats.events.push(event);

    // Keep only last 10000 events
    if (stats.events.length > 10000) {
      stats.events = stats.events.slice(-10000);
    }

    stats.lastUpdated = Date.now();

    // Write back to file
    await writeStats(stats);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const stats = await readStats();

    // Calculate statistics
    const android = stats.events.filter((e) => e.type === 'android').length;
    const ios = stats.events.filter((e) => e.type === 'ios').length;
    const androidAuto = stats.events.filter((e) => e.type === 'android-auto').length;

    const bySection = {
      hero: {
        android: stats.events.filter((e) => e.section === 'hero' && e.type === 'android').length,
        ios: stats.events.filter((e) => e.section === 'hero' && e.type === 'ios').length,
      },
      comingSoon: {
        android: stats.events.filter((e) => e.section === 'coming-soon' && e.type === 'android').length,
        ios: stats.events.filter((e) => e.section === 'coming-soon' && e.type === 'ios').length,
      },
    };

    return NextResponse.json({
      total: stats.events.length,
      android,
      ios,
      androidAuto,
      bySection,
      recent: stats.events.slice(-50).reverse(),
      lastUpdated: stats.lastUpdated,
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
