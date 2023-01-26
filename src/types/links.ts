export type Link = {
    number: number,
    title: string,
    route: string,
    namePath: string,
}

export type LinkContent = {
    route: string,
    title: string,
    subTitle: string,
    links: Content[],
};

export type Content = {
    title: string,
    route: string,
};