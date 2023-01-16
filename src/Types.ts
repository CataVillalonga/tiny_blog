export interface BlogPostData  {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
}

export interface IBlogDataProps {
    data: BlogPostData[]
}

export interface IPostProps {
    post: BlogPostData
  }