import {Router} from 'express';
import { createCommentController, deleteCommentController, getAllCommentsController, getSingleCommentController, updateCommentControllers, updateContentControllers } from '../controllers/commentController.js';
import { authMiddleware } from '../middlewares/userAuthMiddleware.js';

const commentRouter=Router();

commentRouter.post('/comments', authMiddleware, createCommentController)

commentRouter.get("/comments", authMiddleware, getAllCommentsController);

commentRouter.get('/comments/single/:CommentID', authMiddleware, getSingleCommentController)

commentRouter.put('/comments/update/:CommentID', authMiddleware, updateCommentControllers)

commentRouter.patch('/comments/patch/:CommentID', updateContentControllers)

commentRouter.delete('/comments/delete/:CommentID', authMiddleware, deleteCommentController)


export default commentRouter;