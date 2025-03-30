import { getCurrentUser } from '@/lib/actions/auth.actions';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.actions';
import { redirect } from 'next/navigation';

const page = async ({params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if(!interview) redirect('/');

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  })

  return (
    <div>page</div>
  )
}

export default page