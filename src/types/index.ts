export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export type RecordingStatus = 'idle' | 'recording' | 'completed';

export type NotificationType = 'info' | 'success' | 'error';

export type Notification = {
  id: string;
  type: NotificationType;
  message: string;
};