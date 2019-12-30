import { ComponentViewConfig } from "./data.props";
import {
    Badge,
    BadgeProps,
    badgeSchema,
    BadgeSize,
} from "@microsoft/fast-components-react-msft";
import Guidance from "../../.tmp/badge/guidance";
import API from "../../.tmp/badge/api";

const badgeConfig: ComponentViewConfig<BadgeProps> = {
    api: API,
    schema: badgeSchema,
    component: Badge,
    guidance: Guidance,
    scenarios: [
        {
            displayName: "Small",
            data: {
                children: "Badge",
                size: BadgeSize.small,
            },
        },
        {
            displayName: "Large",
            data: {
                children: "Badge",
                size: BadgeSize.large,
            },
        },
        {
            displayName: "Unfilled",
            data: {
                children: "Badge",
                filled: false,
            },
        },
    ],
};

export default badgeConfig;
