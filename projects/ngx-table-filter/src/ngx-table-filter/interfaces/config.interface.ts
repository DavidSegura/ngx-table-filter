export interface INgxTableConfig {
    label: string;
    attr: string;
    showFilter?: boolean;
    multiple?: boolean;
}

export type INgxTableOptions = INgxTableConfig[];

export interface INgxItemFilter {
    value: any;
    label: string;
}
