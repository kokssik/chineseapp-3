<script>
  import Layout from "./lib/components/Layout.svelte";
  import Home from "./lib/routes/Home.svelte";
  import Admin from "./lib/routes/Admin.svelte";

  import { Router, Route } from "svelte-routing";

  let url = "/";
</script>

<Router {url}>
  <Layout>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Admin} />
  </Layout>
</Router>
