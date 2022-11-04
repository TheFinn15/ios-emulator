export function LockScreen() {
  return (
      <div className={'lock-screen'}>
        <div className="lock-screen__blocked" />
        <div className="lock-screen__time">
          {new Date().getHours()}:{new Date().getMinutes()}
        </div>
      </div>
  );
}
