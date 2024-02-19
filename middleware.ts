import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const url = request.nextUrl.clone(); // 現在のURLのクローンを作成
	const pathname = url.pathname; // アクセスされたパス

	// 認証が必要なページにアクセスしたときの処理
	if (pathname.startsWith('/after')) {
		// セッションクッキーを確認（NextAuth.jsが使用するクッキー名を指定）
		const sessionToken = request.cookies.get('next-auth.session-token');

		if (!sessionToken) {
			// セッションクッキーがない場合、ログインページにリダイレクト
			url.pathname = '/'; // ログインページのパス
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}