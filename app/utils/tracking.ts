// Tracking utility for button clicks

export type ButtonType = 'android' | 'ios' | 'android-auto';

export interface ClickEvent {
  type: ButtonType;
  timestamp: number;
  userAgent: string;
  section: 'hero' | 'coming-soon';
}

const BACKEND_URL = 'https://marte-backend-production.up.railway.app';

// Track download to backend API
export const trackDownload = async (platform: 'ios' | 'android') => {
  try {
    if (typeof window === 'undefined') return;

    const response = await fetch(`${BACKEND_URL}/analytics/website/track-download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        platform,
        userAgent: navigator.userAgent,
      }),
    });

    if (!response.ok) {
      console.error('Failed to track download:', await response.text());
    }
  } catch (error) {
    console.error('Tracking error:', error);
  }
};

// Save click event to localStorage and backend
export const trackButtonClick = (type: ButtonType, section: 'hero' | 'coming-soon') => {
  try {
    const event: ClickEvent = {
      type,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
      section,
    };

    // Get existing events from localStorage
    const existingEvents = typeof window !== 'undefined' 
      ? JSON.parse(localStorage.getItem('marte-clicks') || '[]')
      : [];

    // Add new event
    existingEvents.push(event);

    // Keep only last 1000 events to avoid storage issues
    const eventsToKeep = existingEvents.slice(-1000);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('marte-clicks', JSON.stringify(eventsToKeep));
    }

    // Track to backend API
    if (type === 'ios') {
      trackDownload('ios');
    } else if (type === 'android' || type === 'android-auto') {
      trackDownload('android');
    }
  } catch (error) {
    console.error('Tracking error:', error);
  }
};

// Get statistics from localStorage
export const getLocalStats = (): {
  android: number;
  ios: number;
  androidAuto: number;
  total: number;
  bySection: {
    hero: { android: number; ios: number };
    comingSoon: { android: number; ios: number };
  };
  recent: ClickEvent[];
} => {
  try {
    if (typeof window === 'undefined') {
      return {
        android: 0,
        ios: 0,
        androidAuto: 0,
        total: 0,
        bySection: {
          hero: { android: 0, ios: 0 },
          comingSoon: { android: 0, ios: 0 },
        },
        recent: [],
      };
    }

    const events: ClickEvent[] = JSON.parse(
      localStorage.getItem('marte-clicks') || '[]'
    );

    const stats = {
      android: events.filter((e) => e.type === 'android').length,
      ios: events.filter((e) => e.type === 'ios').length,
      androidAuto: events.filter((e) => e.type === 'android-auto').length,
      total: events.length,
      bySection: {
        hero: {
          android: events.filter((e) => e.section === 'hero' && e.type === 'android').length,
          ios: events.filter((e) => e.section === 'hero' && e.type === 'ios').length,
        },
        comingSoon: {
          android: events.filter((e) => e.section === 'coming-soon' && e.type === 'android').length,
          ios: events.filter((e) => e.section === 'coming-soon' && e.type === 'ios').length,
        },
      },
      recent: events.slice(-50).reverse(), // Last 50 events
    };

    return stats;
  } catch (error) {
    console.error('Error getting stats:', error);
    return {
      android: 0,
      ios: 0,
      androidAuto: 0,
      total: 0,
      bySection: {
        hero: { android: 0, ios: 0 },
        comingSoon: { android: 0, ios: 0 },
      },
      recent: [],
    };
  }
};
