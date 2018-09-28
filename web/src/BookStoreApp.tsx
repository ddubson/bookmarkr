import * as React from "react";
import {AppBar, CssBaseline, Grid, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";
import {styles} from "./BookStoreApp.styles";
import ProductCard from "./ProductCard";
import {PureComponent} from "react";
import {AxiosPromise} from "axios";
import {getAllBooks} from "./books/GetAllBooks.service";
import Book from "./books/Book";

interface BookStoreAppProps extends WithStyles<typeof styles> {
  getAllBooks: () => AxiosPromise<Book[]>,
}

interface BookStoreAppState {
  books: Book[]
}

class BookStoreApp extends PureComponent<BookStoreAppProps, BookStoreAppState> {
  constructor(props: BookStoreAppProps) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount(): void {
    getAllBooks().then((books: Book[]) => {
      this.setState({books})
    })
  }

  render(): JSX.Element {
    return <React.Fragment>
      <CssBaseline/>
      <Grid container>
        <AppBar position="static"
                className={this.props.classes.appBar}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              data-test="test"
              noWrap
              className={this.props.classes.toolbarTitle}>
              Book Store
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid>
        {
          this.state.books.map((book: Book) => <ProductCard title={book.title} author={book.author}/>);
        }
      </Grid>
    </React.Fragment>
  };
}

export default withStyles(styles)(BookStoreApp);