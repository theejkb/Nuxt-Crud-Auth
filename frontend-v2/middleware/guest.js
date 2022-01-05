export default function ({ store, redirect }) {
  //Quand on est connecté >
  if (store.state.auth.loggedIn) {
    return redirect("/");
  }
}
