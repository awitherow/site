import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../../src/components/Layout";
import Activity from "../../src/components/Activity";

import sanity from "../../src/lib/sanity";

import useGlobal from "../../src/store";

import "./index.scss";

const ActivityPage = () => {
  const [globalState, globalActions] = useGlobal();
  const router = useRouter();

  // TODO: no router.query.name ??

  useEffect(() => {
    async function getActivityData() {
      await globalActions.activities.getActivity(router.query.name);
    }

    getActivityData();
  }, []);

  return (
    <Layout id="activity">
      {globalState.activity._id ? (
        <Activity
          key={globalState.activity._id}
          data={globalState.activity}
          expanded
        />
      ) : null}
    </Layout>
  );
};

export default ActivityPage;
