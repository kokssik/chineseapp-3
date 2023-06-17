<script>
  import Layout from "./lib/components/Layout.svelte";

  import Home from "./lib/routes/Home.svelte";
  import Admin from "./lib/routes/Admin.svelte";
  import Hanzi from "./lib/routes/Hanzi.svelte";
  import Lekce from "./lib/routes/Lekce.svelte";
  import SingleLekce from "./lib/routes/SingleLekce.svelte";

  import { Router, Route } from "svelte-routing";

  let url = "/";
</script>

<Router {url}>
  <Layout>
    <!-- define the routes here -->
    <Route path="/" component={Home} />
    <Route path="/lekce" component={Lekce} />
    <Route path="/lekce/:id" let:params>
      <SingleLekce id={params.id} />
    </Route>
    <Route path="/hanzi" component={Hanzi} />
    <Route path="/admin" component={Admin} />
  </Layout>
</Router>
