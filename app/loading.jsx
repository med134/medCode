export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-dark">
      <div className="w-16 h-16 border-4 border-dashed text-borderColor border-borderColor rounded-full animate-spin dark:border-borderColor"></div>
    </div>
  );
}
