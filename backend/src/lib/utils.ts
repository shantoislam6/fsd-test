import { Request } from 'express';
export type TparsePaginationParamsOptions = {
  req: Request;
  totalCollections: number;
  MAX_LIMIT: number;
  DEFAULT_PAGE: number;
};
export const parsePaginationParams = ({
  req,
  DEFAULT_PAGE = 1,
  MAX_LIMIT = 20,
  totalCollections,
}: TparsePaginationParamsOptions) => {
  const page = req.query?.page ? parseInt(req.query?.page as string) ?? DEFAULT_PAGE : DEFAULT_PAGE;
  const limit = req.query?.limit ? parseInt(req.query?.limit as string) ?? MAX_LIMIT : MAX_LIMIT;

  const collectionLimit = Math.min(limit, MAX_LIMIT);
  const skip = (page - 1) * collectionLimit;

  const totalPages = Math.ceil(totalCollections / limit);

  return { skip, currentPage: page, limit: collectionLimit, totalPages };
};
