interface Data {
  count: number;
  results: Array<{ name: string; url: string }>;
}
export default function Results({ data }: { data: Data | null }) {
  return (
    <section>
      <hr />
      <p>Result :</p>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
}
