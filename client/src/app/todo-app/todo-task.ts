export interface TodoTask {
    creatorId: string;
    createdAt: string;
    assigneeId: string;
    assignerId: string;
    commentCount: number;
    isCompleted: boolean;
    content: string;
    description: string;
    due: {
        date: string;
        isRecurring: false,
        datetime: string;
        string: string;
        timezone: string;
    },
    duration: null;
    id: string;
    labels: string[];
    order: number;
    priority: number;
    projectId: string;
    sectionId: string;
    parentId: string;
    url: string;
}

export interface Project {
    id: string;
    name: string;
    parentId: string | null;
    order: number;
    color: string;
    commentCount: number;
    isShared: boolean;
    isFavorite: boolean;
    isInboxProject: boolean;
    isTeamInbox: boolean;
    url: string;
    viewStyle: string;
}
