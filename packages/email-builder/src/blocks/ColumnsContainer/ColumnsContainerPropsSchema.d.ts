import { z } from 'zod';
declare const ColumnsContainerPropsSchema: z.ZodObject<{
    style: any;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<any, "strip", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    style?: unknown;
    props?: unknown;
}, {
    [x: string]: any;
    style?: unknown;
    props?: unknown;
}>;
export default ColumnsContainerPropsSchema;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema>;
//# sourceMappingURL=ColumnsContainerPropsSchema.d.ts.map