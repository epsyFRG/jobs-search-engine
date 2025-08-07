import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { fetchJobs } from "../actions"

const CompanySearchResults = () => {
  const dispatch = useDispatch()
  const { jobs, loading, error } = useSelector((state) => state.search)
  const params = useParams()

  useEffect(() => {
    if (params.company) {
      dispatch(fetchJobs(params.company))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Jobs at: {params.company}</h1>
            <p className="text-muted">Available positions</p>
          </div>

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

export default CompanySearchResults
