import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap"
import { removeFavourite } from "../favouritesSlice"

const Favourites = () => {
  const companies = useSelector((state) => state.favourites.companies)

  const { loading, error } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const handleRemove = (company) => {
    dispatch(removeFavourite(company))
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Favourite Companies</h1>
            <p className="text-muted">Your saved companies</p>
          </div>

          {loading && (
            <Spinner animation="border" className="d-block mx-auto mb-3" />
          )}
          {error && <Alert variant="danger">{error}</Alert>}

          {companies.length === 0 ? (
            <Card className="text-center py-5">
              <Card.Body>
                <h5 className="text-muted">No favourite companies</h5>
                <p className="text-muted mb-0">
                  Add some companies from the homepage to see them here
                </p>
              </Card.Body>
            </Card>
          ) : (
            <Card className="shadow-sm">
              <ListGroup variant="flush">
                {companies.map((company) => (
                  <ListGroup.Item
                    key={company}
                    className="d-flex justify-content-between align-items-center py-3"
                  >
                    <Link
                      to={`/${company}`}
                      className="text-decoration-none fw-bold"
                    >
                      {company}
                    </Link>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleRemove(company)}
                    >
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
