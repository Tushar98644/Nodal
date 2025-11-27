export interface InfoFormProps {
    onComplete: (data: any) => void;
}

export type Message = {
  id: string;
  role: 'ai' | 'user' | 'system';
  content: string;
};

export interface ChatComponentProps {
  onSubmit: (message: string) => void;
  object?: any;
  isLoading: boolean;
}

export interface WorkspaceProps {
    object: BrandSchema;
}
