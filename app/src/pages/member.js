import { useEffect } from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "../components/customer/customer-list-results";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";
import { useDispatch, useSelector } from "react-redux";
import { MEMBER_LISTS_REQUEST } from "src/reducers/member";

function Member() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: MEMBER_LISTS_REQUEST,
      query: "",
    });
  }, [dispatch]);
  const { memberLists } = useSelector((state) => state.member);
  return (
    <>
      <Head>
        <title>Customers | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            {console.log("Customers:", customers)}
            {memberLists ? (
              memberLists && <CustomerListResults customers={memberLists} />
            ) : (
              <div>Component Loding...</div>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}
Member.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Member;
