import React from "react";
import { SelectClassNameContract } from "@microsoft/fast-components-class-name-contracts-msft";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { DesignSystem, SelectStyles } from "@microsoft/fast-components-styles-msft";
import { Subtract } from "utility-types";
import MSFTSelect, {
    SelectHandledProps as MSFTSelectHandledProps,
    SelectProps as MSFTSelectProps,
    SelectManagedClasses,
    SelectUnhandledProps,
} from "./select";
import selectSchema from "./select.schema";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
const Select = manageJss(SelectStyles)(MSFTSelect);
type Select = InstanceType<typeof Select>;

type SelectHandledProps = Subtract<MSFTSelectHandledProps, SelectManagedClasses>;
type SelectProps = ManagedJSSProps<
    MSFTSelectProps,
    SelectClassNameContract,
    DesignSystem
>;

export {
    Select,
    SelectProps,
    SelectClassNameContract,
    SelectHandledProps,
    selectSchema,
    SelectUnhandledProps,
};
