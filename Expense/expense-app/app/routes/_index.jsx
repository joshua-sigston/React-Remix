export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import sharedStyles from './styles/shared.css'

export function links() {
  return({ rel: 'stylesheet', href: sharedStyles})
}

export default function Index() {
  return (
    <div>
      <h1 >Home Page</h1>
      <a href="#">asfasdfasdfsa</a>
    </div>
  );
}
