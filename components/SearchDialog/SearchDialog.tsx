'use client';

import * as React from 'react';
import { Button } from 'components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'components/ui/dialog';
import { Input } from 'components/ui/input';
import { useCompletion } from 'ai/react';
import {
  X,
  Loader,
  User,
  Frown,
  CornerDownLeft,
  Search,
  Wand,
} from 'lucide-react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState<string>('');

  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/vector-search',
  });

  // React.useEffect(() => {
  //   const down = (e: KeyboardEvent) => {
  //     if (e.key === 'k' && e.metaKey) {
  //       setOpen(true);
  //     }

  //     if (e.key === 'Escape') {
  //       console.log('esc');
  //       handleModalToggle();
  //     }
  //   };

  //   document.addEventListener('keydown', down);
  //   return () => document.removeEventListener('keydown', down);
  // }, []);

  // function handleModalToggle() {
  //   setOpen(!open);
  //   setQuery('');
  // }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(query);
    complete(query);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-[40px] bottom-[40px]"
      >
        <Image src="/images/trino.png" width="75" height="75" alt="Search" />
      </button>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[850px] max-h-[80vh] overflow-y-auto text-black">
          <DialogHeader>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/images/trino.png"
                width="75"
                height="75"
                alt="Search"
              />
              <div>
                <DialogTitle>Ask a question</DialogTitle>
                <DialogDescription>
                  Ask Commander Bun Bun a question about Trino.
                </DialogDescription>
              </div>
            </div>
            <hr />
            <button
              className="absolute top-0 right-2 p-2"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4 dark:text-gray-100" />
            </button>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4 text-slate-700">
              {query && (
                <div className="flex items-center gap-4">
                  <span className="bg-background p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <User width={24} />{' '}
                  </span>
                  <div>
                    <small>You asked...</small>
                    <p className="leading-tight font-semibold text-slate-700 dark:text-slate-100">
                      {query}
                    </p>
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="animate-spin relative flex w-5 h-5 ml-2">
                  <Loader />
                </div>
              )}

              {error && (
                <div className="flex items-center gap-4">
                  <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                    <Frown width={18} />
                  </span>
                  <span className="text-slate-700 dark:text-slate-100">
                    Sad news, the search has failed! Please try again.
                  </span>
                </div>
              )}

              {completion && !error ? (
                <div className="flex flex-col items-start gap-4 text-black">
                  <Markdown remarkPlugins={[remarkGfm]}>{completion}</Markdown>
                </div>
              ) : null}

              <div className="relative">
                <Input
                  placeholder="Ask a question..."
                  name="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="col-span-3"
                />
                <CornerDownLeft
                  className={`absolute top-3 right-5 h-4 w-4 text-gray-300 transition-opacity ${
                    query ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-100">
                Or try:{' '}
                <button
                  type="button"
                  className="px-1.5 py-0.5
                  bg-slate-50 dark:bg-gray-500
                  hover:bg-slate-100 dark:hover:bg-gray-600
                  rounded border border-slate-200 dark:border-slate-600
                  transition-colors"
                  onClick={(_) => setQuery('What is Trino?')}
                >
                  What is Trino?
                </button>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-red-500">
                Ask
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
