import { redirect } from 'next/navigation';

export default function GearsPage() {
  // Redirect removed gears route to the homepage.
  redirect('/');
}
