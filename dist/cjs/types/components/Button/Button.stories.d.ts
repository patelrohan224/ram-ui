/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./types").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        onClick: {
            description: string;
            action: string;
        };
        type: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const PrimaryButton: {
    args: {
        label: string;
        onClick: () => void;
        type: string;
        disabled: boolean;
        variant: string;
    };
};
export declare const SecondaryButton: {
    args: {
        label: string;
        onClick: () => void;
        type: string;
        disabled: boolean;
        variant: string;
    };
};
export declare const DisabledButton: {
    args: {
        label: string;
        onClick: () => void;
        type: string;
        disabled: boolean;
        variant: string;
    };
};
