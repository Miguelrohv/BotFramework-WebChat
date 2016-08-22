export interface BotConversation {
    conversationId: string,
    token: string,
    eTag?: string,
    streamUrl?: string
}

export interface BotAttachment {
    url: string,
    contentType: string
}

export interface BotMessage
{
    id?: string,
    conversationId?: string,
    created?: string,
    from?: string,
    text?: string,
    channelData?: any,
    images?: string[],
    attachments?: BotAttachment[];
    eTag?: string;
}

export interface BotMessageGroup
{
    messages: BotMessage[],
    watermark?: string,
    eTag?: string
}