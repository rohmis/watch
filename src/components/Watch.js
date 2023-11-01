import React, { useEffect, useState } from "react";
import { Container, Card, Row, Button, Pagination, Stack } from "react-bootstrap";
import moment from "moment-timezone";

export default function Watch() {
  const [timezone, setTimeZone] = useState("Indian Standard Time");
  const [time, setTime] = useState(moment().tz(timezone).format("LTS"));
  const all = moment.tz.names();
  const zonesPerPage = 15;
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format("LTS"));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const changeTimeZone = (selectedZone) => {
    setTimeZone(selectedZone);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    const maxPages = Math.ceil(all.length / zonesPerPage);
    setPage((prevPage) => (prevPage < maxPages - 1 ? prevPage + 1 : prevPage));
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber - 1);
  };
  const start = page * zonesPerPage;
  const end = (page + 1) * zonesPerPage;
  const zonesToDisplay = all.slice(start, end);

  const renderTimeZones = () => {
 

    return zonesToDisplay.map((zone) => (
      <Button
        key={zone}
        variant="dark"
        style={{
          width: "18rem",
          marginBottom: "10px",
          marginRight: "10px",
          padding: "10px",
        }}
        onClick={() => changeTimeZone(zone)}
      >
        {zone.slice(0, 15)}
      </Button>
    ));
  };

  const visiblePages = [page + 1, page + 2, page + 3].filter(
    (pageNumber) => pageNumber <= Math.ceil(all.length / zonesPerPage)
  );

  return (
    <>
      <Container style={{ marginTop: "40px", padding: "40px", marginBottom: "-60px" }}>
        <Card style={{ height: "400px" }}>
          <Card.Body className="card_body">
            <Card.Text>
              <Row className="row">{time}</Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container style={{ marginTop: "40px", padding: "40px" }}>
        <Card style={{ textAlign: "center", padding: "10px" }}>
          <Card.Title className="timeZone_title">Time Zone</Card.Title>
          <Row xs={1} md={2} className="g-4" style={{ marginTop: "20px" }}>
            {renderTimeZones()}
          </Row>
          <Row className="pagination">
            <Pagination style={{ marginTop: "20px"}}>
              <Stack direction="horizontal" gap={2}>
                <Button onClick={handlePrevPage} variant="primary" className="display" disabled={page===0} >Prev</Button>
                {visiblePages.map((pageNumber) => (
                  <Pagination.Item
                    key={pageNumber}
                    active={pageNumber === page + 1}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Pagination.Item>
                ))}
                <Button onClick={handleNextPage} variant="primary" className="display" disabled={end >= all.length} >Next</Button>
              </Stack>
            </Pagination>
          </Row>
        </Card>
      </Container>
    </>
  );
}
