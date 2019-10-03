import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (_, args, { request }) => {
      isAuthenticated();

      const { postId } = args;
      const { user } = request;

      try {
        const existLike = await prisma.$exists.like({
          AND: [
            {
              user: {
                id: user.id
              }
            },
            {
              post: {
                id: postId
              }
            }
          ]
        });

        if (existLike) {
          // To do
        } else {
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
      } catch {
        return false;
      }
    }
  }
};
