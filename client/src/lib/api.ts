export const getMessages = async () => {
  const data = await fetch('/api/v1/messages');

  return await data.json();

};

export const createMessage = async ({ message }: CreateMessageType) => {
  const fetchParams: FetchParamsType = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  }

  const data = await fetch('/api/v1/messages', fetchParams);

  return data;
};