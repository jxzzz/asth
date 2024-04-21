import { Button, Divider } from '../../../../packages';

const ButtonDoc = () => {
  return (
    <>
      <Button
        className="ice-mr-4"
        variant="default"
        onClick={() => {
          console.log('default');
        }}
      >
        default
      </Button>
      <Button variant="primary" className="ice-mr-4">
        primary
      </Button>
      <Button variant="info" className="ice-mr-4">
        info
      </Button>
      <Button variant="warning" className="ice-mr-4">
        warning
      </Button>
      <Button
        className="ice-mr-4"
        variant="error"
        onClick={() => {
          console.log(123);
        }}
      >
        error
      </Button>

      <Divider></Divider>
      <Button
        className="ice-mr-4"
        disabled
        variant="default"
        onClick={() => {
          console.log('default');
        }}
      >
        default
      </Button>
      <Button disabled variant="primary" className="ice-mr-4">
        primary
      </Button>

      <Button disabled variant="info" className="ice-mr-4">
        info
      </Button>

      <Button disabled variant="warning" className="ice-mr-4">
        warning
      </Button>

      <Button
        disabled
        className="ice-mr-4"
        variant="error"
        onClick={() => {
          console.log(123);
        }}
      >
        error
      </Button>
      <Divider></Divider>
      <Button
        className="ice-mr-4"
        dashed
        variant="default"
        onClick={() => {
          console.log('default');
        }}
      >
        default
      </Button>
      <Button dashed variant="primary" className="ice-mr-4">
        primary
      </Button>

      <Button dashed variant="info" className="ice-mr-4">
        info
      </Button>

      <Button dashed variant="warning" className="ice-mr-4">
        warning
      </Button>

      <Button
        disabled
        dashed
        className="ice-mr-4"
        variant="error"
        onClick={() => {
          console.log(123);
        }}
      >
        error
      </Button>
    </>
  );
};

export default ButtonDoc;
