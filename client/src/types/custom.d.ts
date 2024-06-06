declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
};

type GenericObjectType = Record<string, T>;

type FetchParamsType = {
    method: string
    headers: GenericObjectType
    body: string
};

type FormPropsType = {
    onSubmit: SubmitHandler<FieldValues>
    children: (boolean | JSX.Element)[]
    addStyle?: string
};

type InputPropsType = {
    register: GenericObjectType
    required?: boolean
};

type SubmitIconPropsType = {
    svgId: string
};

type MessageItemPropsType = {
    item: MessageDtoType
};

type CreateMessageType = {
    message: string
};

type MessageDtoType = {
    id: number
    message: string
};