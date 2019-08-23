<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PostCollection;
use App\Post;
class PostController extends Controller
{
    public function store(Request $request)
    {
        $post = new Post([
            'title' => $request->get('title'),
            'body' => $request->get('body')
        ]);

        $post->save();

        return response()->json('success');
    }

    public function index()
    {
        return new PostCollection(Post::all());
    }

    public function view($slug)
    {
        if (is_numeric($slug)) {
            $post = Post::findOrFail($slug);
            return response()->json($post);
        }
        $post = Post::whereSlug($slug)->firstOrFail();

        return response()->json($post);
    }

    public function edit($slug)
    {
        if (is_numeric($slug)) {
            $post = Post::findOrFail($slug);
            return response()->json($post);
        }
        $post = Post::whereSlug($slug)->firstOrFail();

        return response()->json($post);
    }

    public function update($slug, Request $request)
    {
        if (is_numeric($slug)) {
            $post = Post::findOrFail($slug);

            $post->update($request->all());

            return response()->json('successfully updated');
        }
        $post = Post::whereSlug($slug)->firstOrFail();

        $post->update($request->all());

        return response()->json($post);
    }

    public function delete($slug)
    {
        if (is_numeric($slug)) {
            $post = Post::findOrFail($slug);

            $post->delete();

            return response()->json('successfully deleted');
        }
        $post = Post::whereSlug($slug)->firstOrFail();

        $post->delete();

        return response()->json('successfully deleted');
    }
}
