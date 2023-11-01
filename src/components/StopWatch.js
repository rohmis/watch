import React, { useState, useEffect } from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <>
      <Container>
        <Card className="stopwatch">
          <Card.Text className="stopWatch_title">
            {" "}
            {hours}:{minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            {milliseconds.toString().padStart(2, "0")}
          </Card.Text>
          <Card.Body>
            <Stack direction="horizontal" gap={5}>
              <Button
                variant="warning"
                className="stopwatch-button"
                onClick={startAndStop}
              >
                {isRunning ? "Stop" : "Start"}
              </Button>

              <Button
                variant="danger"
                className="stopwatch-button"
                onClick={reset}
              >
                Reset
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default StopWatch;
