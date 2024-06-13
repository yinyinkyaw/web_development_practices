type ProgressbarProps = {
    total: number;
    current: number;
}

const Progressbar = ({ total, current }: ProgressbarProps) => {
    const progress = Math.round((current / total) * 100);
  return (
    <div className="relative w-full h-2 dark:bg-slate-200 rounded-full overflow-hidden">
        <span className={`h-full absolute left-0 top-0 bg-slate-500 block rounded-full`} style={{ width: `${progress}%`}} />
    </div>
  )
}

export default Progressbar