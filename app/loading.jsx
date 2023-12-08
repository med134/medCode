export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-dark">
      <div className="w-16 h-16 xs:w-8 xs:h-8 border-4 border-dashed text-red-500 border-red-500 rounded-full animate-spin dark:border-light"></div>
    </div>
  );
}
