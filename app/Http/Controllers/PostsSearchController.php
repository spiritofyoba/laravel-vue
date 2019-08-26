<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;

class PostsSearchController extends Controller
{
    public function index(Request $request)
    {
        $results = (new Search())
            ->registerModel(Post::class, ['title', 'body'])
            ->search($request->input('query'));

        return response()->json($results);
    }
}
