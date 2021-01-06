export interface QuestionOverview {
    Title: string
    Content: string
    CommentCount: number
    AgreeCount: number
    AnswerCount: number
    CreatedTime: Date
    QuestionID: string
    VoteStatus: number
    AnswerID: string
}
export interface AnswerInfo {
    Content: string
    AgreeCount: number
    CommentCount: number
    AnswerUserNickName: string
    AnswerUserID: string
    CreatedTime: Date
    VoteStatus: number
    AnswerID: string
}
export interface QuestionInfoAndAnswers {
    Title?: string
    Description?: string
    AnswerCount?: number
    CreatedTime?: Date
    UserID?: string
    AnswerList?: AnswerInfo[]
}
export interface QuestionInfo {
    Title: string
    Content: string
    AnswerCount: number
    CreatedTime: Date
}
export interface CommentInfo{
    CommentID:string
    CommentUserNickName:string
    CommentUserID:string
    Content:string
    CreatedTime:Date
}

//////////////////////////////////////////////////
