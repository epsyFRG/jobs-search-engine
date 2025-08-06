import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addFavourite } from "../favouritesSlice"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const companies = useSelector((state) => state.favourites.companies)
  const isFavourite = companies.includes(data.company_name)

  const handleAddFavourite = () => {
    dispatch(addFavourite(data.company_name))
  }

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <div className="mb-2">
            <Link
              to={`/${data.company_name}`}
              className="text-decoration-none fw-bold"
            >
              {data.company_name}
            </Link>
          </div>
          <div>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              {data.title}
            </a>
          </div>
        </div>
        <Button
          variant={isFavourite ? "success" : "outline-primary"}
          size="sm"
          onClick={handleAddFavourite}
          disabled={isFavourite}
          className="ms-3"
        >
          {isFavourite ? "Favourite" : "+ Favourite"}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Job
