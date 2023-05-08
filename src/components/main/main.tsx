import { useState } from "react";
import Form from "../form/form";
import Results from "../results";

interface Data {
  count: number;
  results: Array<{ name: string; url: string }>;
}
interface RequestParams {
  method: string;
  url: string;
}

// interface Response {
//   count: number;
//   next: string;
//   previous: null;
//   results: Result[];
// }

// interface Result {
//   name: string;
//   url: string;
// }

export default function Main() {
  const [data, setData] = useState<Data | null>(null);
  const [requestParams, setRequestParams] = useState<RequestParams | object>(
    {}
  );

  const callApi = (requestParams: RequestParams) => {
    // mock output
    const data: Data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" },
      ],
    };
    setData(data);
    setRequestParams(requestParams);
    console.log(data);
    console.log(requestParams);
  };
  return (
    <main>
      <div>
        <ReqData props={requestParams} />
        {/* <ReqData method={""} url={""} /> */}

        <Form handleApiCall={callApi} />
        <Results data={data} />
      </div>
    </main>
  );
}

export function ReqData({ props }: any) {
  console.log(props);
  console.log("🚀 ~ file: main.tsx:61 ~ ReqData ~ props:", props.url);

  return (
    <>
      <p className="req_meth">Request Method: {props.method}</p>
      <p className="req_url">URL: {props.url}</p>
      <hr />
    </>
  );
}
