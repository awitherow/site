import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import Activity from "../../src/components/Activity";
import Product from "../../src/components/Product";

import sanity from "../../src/lib/sanity";

import useGlobal from "../../src/store";

import "./index.scss";

const ActivityPage = () => {
  const [globalState, globalActions] = useGlobal();
  const router = useRouter();

  console.log(globalState);

  useEffect(() => {
    async function getActivityData() {
      await globalActions.activities.getActivity(router.query.name);
    }

    getActivityData();
  }, []);

  return (
    <div id="activity" className="page">
      <Navigation />

      {globalState.activity._id ? (
        <Activity data={globalState.activity} expanded />
      ) : null}

      <Footer />
    </div>
  );
};

export default ActivityPage;
