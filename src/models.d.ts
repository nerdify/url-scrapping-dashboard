interface User {
  id: number
  name: string
  email: string
  password: string
  created_at: string
  updated_at: string
}

interface Site {
  id: number
  name: string
  url: string
  scan_interval: number
  last_scanned_at?: string | null
  created_at: string
  updated_at: string
  snapshots: Snapshot[]
}

interface Snapshot {
  id: number
  site_id: number
  created_at: string
  updated_at: string
}

type ScanIntervalUnit = 'min' | 'hour' | 'day' | 'week' | 'month' | 'year'
