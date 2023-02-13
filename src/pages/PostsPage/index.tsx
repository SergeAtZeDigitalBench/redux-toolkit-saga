import React, { useEffect } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getPostsStart } from "../../redux/reducers/postsSlice";
import { RootState, PostsState } from "../../types";

const PostsPage = (): JSX.Element => {
  const { loading, data, error } = useSelector<RootState, PostsState>(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          bgcolor: (theme) => theme.palette.success.light,
          textAlign: "center",
          my: 2,
        }}
      >
        Posts Page
      </Typography>
      <Box
        sx={{
          minHeight: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && <Typography>...loading...</Typography>}
        {error && (
          <Typography
            sx={{
              color: (theme) => theme.palette.error.main,
              fontWeight: "bold",
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {data.map(({ id, title, body }) => (
          <Card
            key={id}
            sx={{
              width: "30%",
              bgcolor: (theme) => theme.palette.warning.light,
            }}
          >
            <CardContent>
              <Typography variant="h4" textOverflow="ellipsis" noWrap>
                {title}
              </Typography>
              <Typography>{body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PostsPage;
