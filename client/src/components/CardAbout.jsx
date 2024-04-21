import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
 
function CardAbout({ content, heading }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          {/* SVG paths */}
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {heading}
        </Typography>
        <Typography>
          {content}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              {/* SVG paths */}
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default CardAbout