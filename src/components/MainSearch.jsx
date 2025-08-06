import { useState } from "react"
import { Container, Row, Col, Form, Card } from "react-bootstrap"
import Job from "./Job"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const [jobs, setJobs] = useState([])

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
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
