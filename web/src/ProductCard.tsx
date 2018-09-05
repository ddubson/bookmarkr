import * as React from "react";
import {CardContent, Card, Typography, withStyles} from "@material-ui/core";
import {styles} from "./ProductCard.styles";
import {WithStyles} from "@material-ui/core/es";

interface ProductCardProps extends WithStyles<typeof styles> {}

const ProductCard = (props: ProductCardProps) => (
    <React.Fragment>
        <Card className={props.classes.card}>
            <CardContent>
                <Typography>
                    Hello World!
                </Typography>
            </CardContent>
        </Card>
    </React.Fragment>
);

export default withStyles(styles)(ProductCard);