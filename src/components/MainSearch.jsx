import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap"
import Job from "./Job"
import { fetchJobs } from "../actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const { jobs, loading, error } = useSelector((state) => state.search)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      dispatch(fetchJobs(query))
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Remote Jobs Search</h1>
          </div>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Type and then press enter..."
                  size="lg"
                  className="border-0 shadow-none"
                />
              </Form>
            </Card.Body>
          </Card>

          <div className="mt-4">
            {loading && (
              <Spinner animation="border" className="d-block mx-auto" />
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
