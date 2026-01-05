import { ExperienceItem, Profile, Skill } from './types';

export const profile: Profile = {
  name: "大村 なつみ",
  kana: "Omura Natsumi",
  role: "Full Stack Engineer",
  email: "m.f.natsu.k75@gmail.com",
  location: "神奈川県 横浜市",
  summary: "営業職で培ったコミュニケーション力と、バックエンド(Laravel)の知見を活かしたフロントエンド(React/TypeScript)開発が得意です。「サーバーサイドの構造を熟知したフロントエンドエンジニア」として、手戻りの少ない効率的な開発と、チームを円滑にする立ち回りを提供します。",
  strengths: [
    {
      title: "React × TypeScript による堅牢な実装",
      description: "Tailwind CSSやJotaiなどのモダンスダックを選定し、保守性が高く変更に強いUIを構築します。型安全性を重視し、バグの少ないコードを書くことを心がけています。"
    },
    {
      title: "バックエンド視点でのフロントエンド開発",
      description: "Laravel/MySQLの知見があるため、APIのデータ構造やDB設計を考慮したフロントエンド実装が可能です。バックエンドエンジニアとの連携も非常にスムーズです。"
    },
    {
      title: "営業経験を活かしたチーム貢献",
      description: "「何を作るか」だけでなく「なぜ作るか」を意識。認識のズレを防ぐコミュニケーションやドキュメント作成で、チーム開発を円滑に進めます。"
    }
  ]
};

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 5, category: "frontend" },
  { name: "TypeScript / JavaScript", level: 5, category: "frontend" },
  { name: "HTML5 / CSS3", level: 5, category: "frontend" },
  { name: "Tailwind CSS / Bootstrap", level: 5, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },

  // Backend
  { name: "Laravel (PHP)", level: 5, category: "backend" },
  { name: "MySQL / PostgreSQL", level: 4, category: "backend" },

  // Infra & Tools
  { name: "Docker / AWS", level: 4, category: "infra" },
  { name: "Git / GitHub", level: 5, category: "tools" },
  { name: "Cursor / Copilot / ChatGPT", level: 5, category: "tools" },
  { name: "Jira / Redmine", level: 4, category: "tools" },
];

export const experiences: ExperienceItem[] = [
  {
    id: "9",
    period: "2024.03 - 現在",
    role: "フルスタックエンジニア",
    title: "官公庁向け観光支援システムの追加機能開発",
    description: "React/TypeScriptとLaravelを用いたフルスタック開発。Jotaiを活用した複雑なタブ切り替え機能や、自然観光資源データの可視化UIを設計から実装まで担当。",
    techStack: ["React", "TypeScript", "Jotai", "Laravel", "MySQL", "Docker", "Cursor"],
    points: [
      "Jotaiを用いたパフォーマンス最適化で、6タブ構成の複雑な画面を実装",
      "API設計からフロント実装まで一人で完遂し、手戻りを削減",
      "AIツールを活用し、ボイラープレート生成やテスト作成を効率化"
    ]
  },
  {
    id: "8",
    period: "2024.12 - 2025.02",
    role: "バックエンドエンジニア",
    title: "eラーニングシステムのAPIリファクタリング",
    description: "Laravelを用いたAPIの最適化、セキュリティ強化（Policy/Gate）、レガシーコードのリファクタリング。",
    techStack: ["Laravel", "PHP", "MySQL", "Postman", "Jira"],
    points: [
      "レガシーコードをモダンなLaravel仕様へリファクタリング",
      "フロントエンドと事前に型定義をすり合わせ、連携工数を削減",
      "Postmanでの網羅的テストによる品質担保"
    ]
  },
  {
    id: "7",
    period: "2024.01 - 2024.12",
    role: "フルスタックエンジニア",
    title: "受発注・在庫管理システムのリプレイス開発",
    description: "Vue 3 (Composition API) + Laravel (Clean Architecture) による基幹システム刷新。",
    techStack: ["Vue.js", "TypeScript", "Pinia", "Laravel", "Tailwind CSS"],
    points: [
      "コンサルと開発の間の「翻訳者」として要件定義を主導",
      "Atomic DesignとTailwind CSSによる効率的なUI構築",
      "Prettier/ESLintの導入による開発環境の標準化"
    ]
  },
  {
    id: "6",
    period: "2024.10 - 2024.12",
    role: "Webエンジニア（サブリーダー）",
    title: "SNS型トークアプリケーション開発",
    description: "Laravelでのフルスクラッチ開発。メンバーへのGit指導やコードレビューも担当。",
    techStack: ["Laravel", "Bootstrap", "MySQL", "Docker"],
    points: [
      "GitFlowの導入とメンバーへのハンズオン指導",
      "DB設計（多対多のリレーション）とクエリスコープによる検索機能実装"
    ]
  },
  {
    id: "5",
    period: "2023.08 - 2023.12",
    role: "PG・運用保守SE",
    title: "通信キャリア向け基幹システムの改修および運用保守",
    description: "高い可用性が求められる通信キャリア向けシステムの保守・運用および機能追加改修を担当。Linux/Unix環境下でのシェルスクリプトによるバッチ処理改修や、Oracle DBを用いたデータ抽出・更新処理など、バックエンド領域の実装からリリース作業までを経験。",
    techStack: ["ShellScript", "Oracle Database", "SQL", "Linux"],
    points: [
      "シェルスクリプトによるバッチ処理改修・作成",
      "Oracle Databaseを用いたデータ抽出・更新処理",
      "本番リリース対応でミスゼロを達成"
    ]
  },
  {
    id: "4",
    period: "2023.04 - 2023.07",
    role: "PMO補佐・テスト管理",
    title: "金融系基幹システムの総合テスト支援・品質管理",
    description: "大規模金融システムの刷新プロジェクトにおいて、PMOチームの一員として品質管理およびテスト推進を担当。テスト計画の策定支援から進捗管理、不具合（バグ）のライフサイクル管理を行い、開発チームと連携してシステム品質の担保に貢献。",
    techStack: ["SQL", "Oracle Database", "PostgreSQL", "Backlog", "Jira"],
    points: [
      "テスト進捗・品質管理（QAマネジメント）",
      "SQLによるデータ検証・テストデータ準備",
      "マルチステークホルダーとの調整"
    ]
  },
  {
    id: "3",
    period: "2022.11 - 2023.03",
    role: "PG・Webエンジニア",
    title: "自社Webアプリケーションの機能拡張および改修",
    description: "Laravel を採用した自社Webサービスの開発プロジェクトに参画。アジャイル（スクラム）体制の下、詳細設計から実装、テスト、デプロイまでをフルスタックに担当。特に、バックエンド（API）とフロントエンドの連携部分を重点的に担当し、パフォーマンス改善や開発環境の標準化にも貢献。",
    techStack: ["Laravel", "PHP", "JavaScript", "MySQL", "Docker", "Bootstrap"],
    points: [
      "RESTful APIの設計・実装",
      "データベース設計・チューニング（N+1問題の解消）",
      "開発環境の標準化によるオンボーディング時間の短縮"
    ]
  },
  {
    id: "2",
    period: "2022.01 - 2022.10",
    role: "テクニカルサポート・ヘルプデスク",
    title: "美容機器およびネットワーク通信環境のテクニカルサポート・保守",
    description: "美容関連企業に対し、導入機器（IoT機器・通信端末）およびネットワーク環境の技術的なトラブルシューティングを担当。ハードウェア故障、ソフトウェア設定、ネットワーク障害などの不具合に対し、ログ確認やリモート診断を用いて原因を特定（切り分け）し、解決または開発部門へのエスカレーションを行った。",
    techStack: ["TCP/IP", "DNS", "DHCP", "Linux", "Windows"],
    points: [
      "ネットワーク階層の切り分け診断",
      "TCP/IP設定および接続サポート",
      "トラブルシューティングのデータベース化による一次解決率向上"
    ]
  },
  {
    id: "freelance",
    period: "2021.07 - 2023.06",
    role: "Webデザイナー・コーダー",
    title: "フリーランス Web制作",
    description: "個人事業主〜中小企業向けのLP・Webサイト制作。デザインからWordPress実装まで一貫対応。",
    techStack: ["HTML/CSS", "JavaScript", "WordPress", "Figma", "XD"],
    points: [
      "2年間で約50件の案件を完遂",
      "ヒアリングから要件定義、デザイン、実装までワンストップで対応"
    ]
  }
];