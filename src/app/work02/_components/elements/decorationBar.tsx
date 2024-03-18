// 画面左側に固定表示する装飾バー
export default function DecorationBar() {
  return (
    <div
      className="absolute bottom-0 left-0 top-[536px] hidden w-[72px] flex-col items-center 
			  topPage:top-[300px] lg:flex"
    >
      <span className="h-6 w-6 rounded-full bg-primary"></span>
      <span className="w-px grow bg-primary"></span>
    </div>
  )
}
